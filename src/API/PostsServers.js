import axios from "axios";

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments?posts",
        {
          // params: {
          //   _limit: limit,
          //   _page: page,
          // },
        }
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}
