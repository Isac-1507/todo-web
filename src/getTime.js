export function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

export function getUnixEpochTime() {
  return Math.floor(Date.now() / 1000);
}

export function convertTimestamp(epochTime) {
  const date = new Date(epochTime * 1000);
  return date.toLocaleString();
}

