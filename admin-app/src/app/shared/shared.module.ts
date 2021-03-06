import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ThemeConstantService } from './services/theme-constant.service';
import { SearchPipe } from './pipes/search.pipe';
import { SplitPipe } from './pipes/split.pipe';
import { NzNotificationService } from 'ng-zorro-antd/notification';
@NgModule({
    exports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        NzIconModule,
        PerfectScrollbarModule,
        SearchPipe,
        SplitPipe
    ],
    imports: [
        RouterModule,
        CommonModule,
        NzIconModule,
        NzToolTipModule,
        PerfectScrollbarModule
    ],
    declarations: [
        SearchPipe,
        SplitPipe
    ],
    providers: [
        ThemeConstantService,
        NzNotificationService
    ]
})

export class SharedModule { }
