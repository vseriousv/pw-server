import { GET, Path, PathParam } from 'typescript-rest';
import ControllerBase from '../common/ControllersLib/Controller.base';

@Path('/db')
class DatabaseController extends ControllerBase {

    @GET
    @Path('/show')
    showAllDB(): string {
        const api = {
            'db': 'Show all DB'
        };
        return JSON.stringify(api);
    }

    @GET
    @Path('/show/:name')
    showAllDBbyName(@PathParam('name') name: string): string {
        const api = {
            'db': 'Show db by name: ' + name
        };
        return JSON.stringify(api);
    }

    @GET
    @Path('/create')
    createDB(): string {
        const api = {
            'db': 'Create db'
        };
        return JSON.stringify(api);
    }

    @GET
    @Path('/remove')
    removeDB(): string {
        const api = {
            'db': 'Remove db'
        };
        return JSON.stringify(api);
    }
}

export default DatabaseController;

