export async function getProfile() {
  const res = await fetch('/api/profile');
  const profile = await res.json();
  return profile;
} 