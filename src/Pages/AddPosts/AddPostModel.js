import { v4 } from "uuid";

class AddPostModel {
// apiyi gonderecegimiz verinin yapisi
  state = {
    id: v4(),
    date: new Date(),
    title: "",
    text: "",
    user: "",
  };
}

export default AddPostModel;
