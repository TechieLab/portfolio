
export class ServiceConstants {
    public static httpMethods: Array<string> = ['GET', 'POST', 'PUT', 'DELETE'];
    public static baseUrl: string = 'http://localhost:5000';
    public static userApi: Object = {

    };

    public static accountApi: Object = {
        loginUrl: '/api/account/login',
        logout: '/api/account/logout',
        register: '/api/account/register'
    };
}