import Quest from "../model/quest";
export async function getQuest(req, res) {
  try {
    const quest = await Quest.find({});
    if (!quest) {
      return res.status(404).json({ error: "Data Not Found" });
    }

    res.status(200).json(quest);
  } catch (error) {
    res.status(404).json({ error: "Error while Fetching data" });
  }
}
export async function postQuest(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form Data Not Profided" });
    Quest.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}
