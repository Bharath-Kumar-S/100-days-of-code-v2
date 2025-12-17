import { getData } from "./getData";
import { postData } from "./postdata";

const runForEver = () => {
  getData()
    .then((data) => data.json())
    .then((posts) => {
      console.log("Fetched Posts:", posts);
      return postData(posts[0]);
    })
    .then((postedData) => {
      console.log("Posted Data:", postedData);
    })
    .then(() => new Promise((resolve) => setTimeout(resolve, 5000)))
    .then(() => runForEver());
};

runForEver();
