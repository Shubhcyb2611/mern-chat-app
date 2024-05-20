import { plainToInstance } from "class-transformer";

export function AppInterceptor(req, res, next) {
  const transmitJson = res.json;
  res.json = function (body) {
    if (res.locals.responseDTO && !Object.keys(body).includes("error")) {
      body = plainToInstance(res.locals.responseDTO, body, {
        excludeExtraneousValues: true,
      });
    }
    return transmitJson.call(this, body);
  };
  next();
}
