import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.less']
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreationStatus = 'No server created';
    serverName = 'TestServer';

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 3000);
    }

    ngOnInit(): void {
    }

    onCreateServer(): void {
        this.serverCreationStatus = `Server ${this.serverName} was created`;
    }

}
