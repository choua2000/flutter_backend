import Poster from "../models/posterModel.js";
class PosterController {
  static async createPoster(req, res) {
      try {
        //MEAN: check required fields
        const { posterName, imageUrl } = req.body;
        if(!posterName || !imageUrl) {
            return res.status(400).json({message: "All fields are required"});
        }
        // const path = req.file.path;
        //MEAN: create new poster
        const poster = new Poster({
            posterName : posterName,
            imageUrl : imageUrl
        });
        await poster.save();
        return res.status(201).json({message: "Poster created successfully", data:poster});
      } catch (error) {
        return res.status(500).json({message: error.message});
      }
  }

}
export default PosterController