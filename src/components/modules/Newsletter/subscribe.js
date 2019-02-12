// @flow

const NEWSLETTER_SUBMISSION_URL = "https://pbh-network.com/subs.php?json=true";

export function subscribe(email: string) {
  return fetch(NEWSLETTER_SUBMISSION_URL, {
    method: "POST",
    body: getSubscribeBody(email),
  });
}

const getSubscribeBody = email => {
  return new URLSearchParams({ EMAIL: email });
};
