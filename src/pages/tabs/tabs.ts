import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MapawebPage } from '../mapaweb/mapaweb';
import { FotoCam } from '../fotocam/fotocam';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = MapawebPage;
  tab5Root = FotoCam;
  constructor() {

  }
}
