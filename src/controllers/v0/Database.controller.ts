import { Controller, Get, PathParams } from '@tsed/common';

@Controller('/db')
export class DatabaseController {

    @Get('/show')
    showAllDB(): string {
        const api = {
            'db': 'Show all DB'
        };
        return JSON.stringify(api);
    }

    @Get('/show/:name')
    showAllDBbyName(@PathParams('name') name: string): string {
        const api = {
            'db': 'Show db by name: ' + name
        };
        return JSON.stringify(api);
    }

    @Get('/create')
    createDB(): string {
        const api = {
            'db': 'Create db'
        };
        return JSON.stringify(api);
    }

    @Get('/remove')
    removeDB(): string {
        const api = {
            'db': 'Remove db'
        };
        return JSON.stringify(api);
    }
}

