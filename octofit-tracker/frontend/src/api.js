const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
const codespacesApiBase = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : null;

export const apiBaseUrl = codespacesApiBase || 'http://localhost:8000/api';

export function getApiUrl(resource) {
  return `${apiBaseUrl}/${resource}`;
}

export function normalizeCollection(data) {
  if (Array.isArray(data)) {
    return data;
  }

  if (data?.results && Array.isArray(data.results)) {
    return data.results;
  }

  if (data?.data && Array.isArray(data.data)) {
    return data.data;
  }

  return [];
}

export function getCodespaceNotice() {
  if (!codespaceName) {
    return 'VITE_CODESPACE_NAME is not set. Using localhost fallback.';
  }
  return `Using Codespaces API base URL: https://${codespaceName}-8000.app.github.dev/api`;
}
