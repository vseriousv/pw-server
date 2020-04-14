import { GET, Path } from 'typescript-rest';
import ControllerBase from '../common/ControllersLib/Controller.base';

@Path('/auth')
class AuthController extends ControllerBase {

    @GET
    @Path('/login')
    showAllDB(): string {
        const api = {
            'login': 'Login user'
        };
        return JSON.stringify(api);
    }
}

export default AuthController;

