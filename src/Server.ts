import { GlobalAcceptMimesMiddleware, ServerLoader, ServerSettings } from '@tsed/common';
import bodyParser from 'body-parser';
import compress from 'compression';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import config from './common/config';
import cors from 'cors';

const rootDir = __dirname;

@ServerSettings({
    rootDir,
    acceptMimes: ['application/json'],
    'port': config.PORT,
    'httpsPort': config.httpsPort,
    '/rest/v0': './controllers/v0/**/*.ts',
    '/rest/v1': './controllers/v1/**/*.ts',
    logger: {
        requestFields: ['method', 'body']
    }
})

export class Server extends  ServerLoader {
    /**
     * @returns {Server}
     */
    corsOptions = {
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }

    public $beforeRoutesInit(): void | Promise<any> {
        this
            .use(cors(this.corsOptions))
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
