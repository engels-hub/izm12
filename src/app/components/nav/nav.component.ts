import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.HandsetPortrait)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private ThemeService: ThemeService) {
    this.ThemeService.initTheme();
    this.isDarkMode = this.ThemeService.isDarkMode();
  }
  isDarkMode: boolean;


  toggleDarkMode(){
    if(this.isDarkMode) this.isDarkMode=!this.isDarkMode;
    this.isDarkMode=this.ThemeService.isDarkMode();


    this.isDarkMode ? this.ThemeService.update('light-mode') : this.ThemeService.update('dark-mode');
  }
  change(newValue: any){

  }
}
