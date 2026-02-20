/**
 * Utility to handle Open-Meteo API responses and dispatch wind rate limit events.
 */
export async function handleOpenMeteoResponse(r: Response): Promise<any> {
    if (r.status === 429) {
        window.dispatchEvent(new CustomEvent('wind-rate-limit', { detail: true }));
        throw new Error('Open-Meteo API call limit exceeded (HTTP 429)');
    }

    const text = await r.text();
    let json;
    try {
        json = JSON.parse(text);
    } catch (e) {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return null;
    }

    if (json && json.error && json.reason && typeof json.reason === 'string' && json.reason.toLowerCase().includes('limit')) {
        window.dispatchEvent(new CustomEvent('wind-rate-limit', { detail: true }));
        throw new Error(`Open-Meteo API call limit exceeded: ${json.reason}`);
    }

    if (!r.ok) {
        throw new Error(`HTTP ${r.status}`);
    }

    window.dispatchEvent(new CustomEvent('wind-rate-limit', { detail: false }));
    return json;
}
