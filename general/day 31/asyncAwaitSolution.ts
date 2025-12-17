import { getData } from "./getData";
import { postData } from "./postdata";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const runForever = async () => {
  while (true) {
    // ---- retry getData until success ----
    let posts;
    while (true) {
      try {
        const res = await getData();
        posts = await res.json();
        console.log("Fetched Posts:", posts);
        break;
      } catch (e) {
        console.error("getData failed, retrying immediately", e);
      }
    }

    // ---- retry postData until success ----
    while (true) {
      try {
        const posted = await postData(posts[0]);
        console.log("Posted Data:", posted);
        break;
      } catch (e) {
        console.error("postData failed, retrying immediately", e);
      }
    }

    // ---- wait before next polling cycle ----
    await sleep(5000);
  }
};

runForever();
