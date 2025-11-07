import jwt from "jsonwebtoken";

async function checkAuth(req) {
  try {
    if (!req.headers.authorization) {
      return {};
    } else {
      let decoded = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
      return decoded;
    }
  } catch (e) {
    return {};
  }
}

export default checkAuth;
