import { GET, Path, PathParam } from 'typescript-rest';
import ControllerBase from '../common/ControllersLib/Controller.base';

@Path('/notification')
class NotificationController extends ControllerBase {

    @GET
    @Path('/show')
    showAllDB(): string {
        const api = {
            'notification': 'Show all notification'
        };
        return JSON.stringify(api);
    }

    @GET
    @Path('/show/:name')
    showAllDBbyName(@PathParam('name') name: string): string {
        const api = {
            'notification': 'Show notification by name: ' + name
        };
        return JSON.stringify(api);
    }

    @GET
    @Path('/create')
    createDB(): string {
        const api = {
            'notification': 'Create notification'
        };
        return JSON.stringify(api);
    }

    @GET
    @Path('/remove')
    removeDB(): string {
        const api = {
            'notification': 'Remove notification'
        };
        return JSON.stringify(api);
    }

    @GET
    @Path('/call/:id')
    callDB(@PathParam('id') id: string): string {
        const api = {
            'notification': 'Call notification by: ' + id
        };
        return JSON.stringify(api);
    }
}

export default NotificationController;

