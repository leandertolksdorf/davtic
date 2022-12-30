import {Injectable, OnModuleInit} from '@nestjs/common';
import next from "next"
import {NextServer} from "next/dist/server/next";

@Injectable()
export class ViewService implements OnModuleInit{
    private _server: NextServer;

    async onModuleInit() {
        this._server = next({dev: true, dir:"./src/client"})
        await this._server.prepare()
    }

    get server(): NextServer {
        return this._server;
    }
}
