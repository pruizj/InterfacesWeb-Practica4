import { Request, Response } from "express";
import { Db } from "mongodb";

export const status = async (req: Request, res: Response) => {
    res.status(200).send(`Api connected`);
};

export const signin = async (req: Request, res: Response) => {
    const email = req.body.email;
    const db: Db = req.app.get("db");
    const collection = db.collection("usuarios");
  
    if (!req.body) {
      return res.status(500).send("No body");
    }
  
    const exist = await collection.findOne({ email: email });
    if (exist != null) {
      res.status(409).send("Este usuario ya existe");
      console.log("Este usuario ya existe");
    } else {
      const user = await collection
        .insertOne({
          "name": req.body.name,
          "surname": req.body.surname,
          "email": email
        });
  
      res.status(200).send("Has sido registrado");
    }
};

export const getList = async (req: Request, res: Response) => {
    const db: Db = req.app.get("db");
    const collection = db.collection("usuarios");

    const users= await collection.find().toArray();
    res.json(users);
};
export const postDelete = async (req: Request, res: Response) => {
  const email = req.body.email;
  const db: Db = req.app.get("db");
  const collection = db.collection("usuarios");

  if (!req.body) {
    return res.status(500).send("No body");
  }

  const exist = await collection.findOne({ email: email });
  if (exist == null) {
    res.status(409).send("Este usuario ya ha sido borrado");
  } else {
    const user = await collection
      .deleteOne({
        "name": req.body.name,
        "surname": req.body.surname,
        "email": email
      });

    res.status(200).send("Usuario ha sido borrado");
  }
};
export const updateUser = async (req: Request, res: Response) => {
  const email_antiguo = req.body.emailantiguo;
  const db: Db = req.app.get("db");
  const collection = db.collection("usuarios");


  if (!req.body) {
    return res.status(500).send("No body");
  }

  const exist = await collection.findOne({ email: email_antiguo });

  if (exist == null) {
    res.status(409).send("Este usuario no existe");
  } else {
    let newusuario = {
      name: req.body.name|| exist.name,
      surname: req.body.surname ||exist.surname,
      email: req.body.email || exist.email,
    }
    const filter = { email: email_antiguo };
    const updateDoc = {
        $set: {
          name: newusuario.name,
          surname: newusuario.surname,
          email: newusuario.email,
        }
    };
    await collection.updateOne(filter, updateDoc);

    res.status(200).send("Usuario ha sido editado con éxito");
  }
};