export async function sendLoginRequest(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "User" && password === "User") {
        resolve({
          token: "My token"
        });
      } else {
        reject(new Error("Invalid username/password"));
      }
    }, 1000);
  });
}
