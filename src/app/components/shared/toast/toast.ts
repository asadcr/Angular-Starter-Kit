import { Component, Input } from '@angular/core'
import { Message } from 'primeng/primeng'

@Component({
    selector: 'app-toast',
    templateUrl: './toast.html',
    styleUrls: ['./toast.css']
})
export class ToastComponent {

    @Input()
    public msgs: Message[];

    @Input()
    public life: number = 3000; 
}