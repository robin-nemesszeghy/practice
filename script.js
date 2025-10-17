const statusRef = document.querySelector(".status");

function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("FREE");
    }, 2000);
  });
}

// 1. Then
// getSubscriptionStatus().then((response) => console.log(response));

// 2. Async/Await
async function main() {
  const status = await getSubscriptionStatus();
  statusRef.innerHTML = status;
}

main();

// Create getVideo function

function getVideo(subscriptionStatus) {
  return new Promise((resolve, reject) => {
    if (subscriptionStatus === "VIP") {
      resolve("show video");
    } else if (subscriptionStatus === "FREE") {
      resolve("show trailer");
    } else {
      reject("no video");
    }
  });
}

async function main() {
  const status = await getSubscriptionStatus();
  statusRef.innerHTML = status;
  console.log(await getVideo(status));
}
