import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../providers/auth.service';

@Injectable({
	providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

	constructor(private auth: AuthService) {}

	public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const token: string = this.auth.USER_TOKEN;
		let request = req;
		if (token) {
			request = req.clone({
				setHeaders: {
					authorization: token
				}
			});
		}
		return next.handle(request);
	}

}
