import { fetch } from "react-native";

export function subscribe(EMAIL: string) {
  return fetch("https://pbh-network.com/subs.php?json=true", {
    method: "POST",
    body: new URLSearchParams({ EMAIL }),
  });
}
