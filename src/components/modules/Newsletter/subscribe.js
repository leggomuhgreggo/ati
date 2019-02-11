// @flow

export function subscribe(email: string) {
  return fetch("https://pbh-network.com/subs.php?json=true", {
    method: "POST",
    body: new URLSearchParams({ email }),
  });
}
