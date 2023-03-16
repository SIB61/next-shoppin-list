import { varifyJwt } from "@/lib/jwt";

export default function withAuth(handler) {
  return (req, res) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        res.status(401).send("unauthorized");
        return;
      }
      const tokenArr = authHeader.split(" ");
      if (tokenArr.length < 2) {
        res.status(401).send();
        return;
      }
      const user = varifyJwt(tokenArr[1]);
      if (!user) res.status(401).send("unauthorized");
      req.user = user;
      return handler(req, res);
    } catch (err) {
      return res.status(500).send("internal server error on token validation");
    }
  };
}
