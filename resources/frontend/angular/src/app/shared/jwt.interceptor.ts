import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { JwtService } from "../shared/jwt.service";

@Injectable()

export class JwtInterceptor implements HttpInterceptor {
    constructor(private jwtService: JwtService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const jwtToken = this.jwtService.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + jwtToken
            }
        });
        return next.handle(req);
    }
}
