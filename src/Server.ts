import { GlobalAcceptMimesMiddleware, ServerLoader, ServerSettings } from '@tsed/common';
import bodyParser from 'body-parser';
import compress from 'compression';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';


const rootDir = __dirname;

@ServerSettings({
    rootDir,
    acceptMimes: ['application/json'],
    'port': 7070,
    'httpsPort': 7777,
    '/rest/v0': './controllers/v0/**/*.ts',
    '/rest/v1': './controllers/v1/**/*.ts',
    logger: {
        requestFields: ['method']
    }
})

export class Server extends  ServerLoader {
    /**
     * @returns {Server}
     */

    public $beforeRoutesInit(): void | Promise<any> {
        this
            .use(GlobalAcceptMimesMiddleware)
            .use(cookieParser())
            .use(compress({ }))
            .use(methodOverride())
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({
                extended: true
            }));
    }
}
