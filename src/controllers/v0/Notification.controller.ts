import { Controller, Get, PathParams } from '@tsed/common';

@Controller('/notification')
export class NotificationController {

    @Get('/show')
    showAllDB(): string {
        const api = {
            'notification': 'Show all notification'
        };
        return JSON.stringify(api);
    }

    @Get('/show/:name')
    showAllDBbyName(@PathParams('name') name: string): string {
        const api = {
            'notification': 'Show notification by name: ' + name
        };
        return JSON.stringify(api);
    }

    @Get('/create')
    createDB(): string {
        const api = {
            'notification': 'Create notification'
        };
        return JSON.stringify(api);
    }

    @Get('/remove')
    removeDB(): string {
        const api = {
            'notification': 'Remove notification'
        };
        return JSON.stringify(api);
    }

    @Get('/call/:id')
    callDB(@PathParams('id') id: string): string {
        const api = {
            'notification': 'Call notification by: ' + id
        };
        return JSON.stringify(api);
    }
}

