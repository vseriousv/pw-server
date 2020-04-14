import { GET, Path } from 'typescript-rest';
import ControllerBase from '../common/ControllersLib/Controller.base';

@Path('/')
class MainController extends ControllerBase {

    @GET
    mainIndex(): string {
        const api = {
            'What is it?': 'This is the first message from our service.',
            'What service?': 'It is backend as a platform.',
            'Why is it needed?': 'To facilitate your development app.',
            'Why should you choose us?': 'It’s easy with us that even a child will figure it out.',
            'How to use it?': 'It is written in more detail on our website: gearappi.com',
            'When will the service be launched?': 'Alpha testing will begin on February 1, 2020.',
            'How to participate in alpha testing?': 'To do this, send a message to the mail: alpha@gearappi.com',
            'Thanks!': 'Regards, Gearappi.com Team.'
    }
        return JSON.stringify(api);
    }
}

export default MainController;

