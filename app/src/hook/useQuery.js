import { useEffect, useState } from "react";
import axios from "axios";

const DEFAULT_OPTIONS = {
    method: "GET",
    headers: {},
    data: undefined,
    selector: null,
    transform: null,
    pick: null,
}

const _formatData = (data, options = { selector: DEFAULT_OPTIONS.selector, transform: DEFAULT_OPTIONS.transform, pick: DEFAULT_OPTIONS.pick }) => {
    options = { selector: DEFAULT_OPTIONS.selector, transform: DEFAULT_OPTIONS.transform, ...options };
    console.log(options)

    if (options.selector != null) data = data[options.selector];
    if (options.transform != null && typeof options.transform === "function") data = options.transform(data);
    if (options.pick != null && Array.isArray(options.pick)) return JSON.parse(JSON.stringify(data, options.pick));

    return data;
}

/**
 * Make request at the first component rendering (mount operation) just to get data from server
 * @example
 * const { data } = useQuery("https://dummyjson.com/products", {
 *   method: "GET",
 *   selector: "products",
 *   transform: (data) => {
 *     return data.sort((a, b) => b.id - a.id)
 *   },
 *   pick: ["id", "title", "description", "category"]
 * });
 * 
 * @param {string} url Request server url 
 * @param {object} options
 * @param {string} [options.method] Request method
 * @param {object} [options.headers] Headers to include
 * @param {any} [options.data] Data to send
 * @param {string[]} [options.selector] Select a specific key on first level object got from server
 * @param {() => {}} [options.transform] Eventually transform data got from server (ex sorting)
 * @param {string[]} [options.pick] Select just a part of data from an array of objects (got from server)
 * @returns {{ data: any, error: string|boolean, loading: boolean, reload: () => {} }}
 */
export const useQuery = (url, options = { ...DEFAULT_OPTIONS }) => {
    options = { ...DEFAULT_OPTIONS, ...options };

    if (url === undefined) throw new Error("url must be a valid link");

    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const load = async () => {
        if (!loading) setLoading(true);
        if (error) setError(false);

        try {
            const { method, headers, data, selector, transform, pick } = options;
            const response = await axios({ url, method, headers, data });

            setData(_formatData(response.data, { selector, transform, pick }));
        } catch (err) {
            console.log(err);
            setError(err.message)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        load();
    }, [url]);

    return {
        data, error, loading, reload: load
    }
}

/**
 * Make request by calling `request` method (perfect for task that needs POST, PUT, PATCH, DELETE actions)
 * @example
 * const { data, request } = useMutation("https://dummyjson.com/products", {
 *   method: "GET",
 *   selector: "products",
 *   transform: (data) => {
 *     return data.sort((a, b) => b.id - a.id)
 *   },
 *   pick: ["id", "title", "description", "category"]
 * });
 * 
 * return (
 *  <>
 *    <button onClick={request}>Get Data</button>
 *    <div>
 *      <pre>{data && JSON.stringify(data, null, 2)}</pre>
 *    </div>
 *  </>
 * )
 * 
 * @param {string} url Request server url 
 * @param {object} options
 * @param {string} [options.method] Request method
 * @param {object} [options.headers] Headers to include
 * @param {any} [options.data] Data to send
 * @param {string[]} [options.selector] Select a specific key on first level object got from server
 * @param {() => {}} [options.transform] Eventually transform data got from server (ex sorting)
 * @param {string[]} [options.pick] Select just a part of data from an array of objects (got from server)
 * @returns {{ data: any, error: string|boolean, loading: boolean, request: () => {} }}
 */
export const useMutation = (url, options = { ...DEFAULT_OPTIONS }) => {
    options = { ...DEFAULT_OPTIONS, ...options };

    if (url === undefined) throw new Error("url must be a valid link");

    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const request = async () => {
        if (!loading) setLoading(true);
        if (error) setError(false);

        try {
            const { method, headers, data, selector, transform, pick } = options;
            const response = await axios({ url, method, headers, data });

            setData(_formatData(response.data, { selector, transform, pick }));
        } catch (err) {
            console.log(err);
            setError(err.message)
        } finally {
            setLoading(false);
        }
    }

    return { data, error, loading, request };
}