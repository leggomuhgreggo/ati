// @flow

export function subscribe(email: string) {
  return fetch("https://pbh-network.com/subs.php?json=true", {
    method: "POST",
    body: getSubscribeBody(email),
  });
}

const getSubscribeBody = email => {
  return new URLSearchParams({ EMAIL: email });
};
