angular.module('users-and-teams').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/modules/connexion/connexion.html',
    "<div class=\"md-padding\" flex layout-sm=\"column\">\r" +
    "\n" +
    "    <md-card>\r" +
    "\n" +
    "        <md-card-content>\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "            You can select the \"sign in\" option or \"create an account\".\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <md-input-container style=\"margin-right: 10px;\">\r" +
    "\n" +
    "            <label>Login / Create account</label>\r" +
    "\n" +
    "                <md-select class=\"md-block\" ng-change=\"vm.switchView()\" ng-model=\"vm.account.select\" style=\"min-width: 200px; max-width: 200px\">\r" +
    "\n" +
    "                    <md-option \r" +
    "\n" +
    "                        ng-repeat=\"account in vm.account.type\" \r" +
    "\n" +
    "                        value=\"{{account.value}}\">{{account.value}}\r" +
    "\n" +
    "                    </md-option>\r" +
    "\n" +
    "                </md-select>\r" +
    "\n" +
    "            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <form name=\"connexionform\" ng-show=\"!vm.showNewAccount\">\r" +
    "\n" +
    "                <md-content layout=\"column\" layout-padding=\"\">\r" +
    "\n" +
    "                    <md-input-container class=\"md-block\">\r" +
    "\n" +
    "                        <label>Username</label>\r" +
    "\n" +
    "                        <input minLength=\"4\" required  name=\"un\" ng-model=\"vm.user.username\">\r" +
    "\n" +
    "                        <div ng-messages=\"connexionform.un.$error\">\r" +
    "\n" +
    "                            <div ng-message=\"required\">This is required.</div>\r" +
    "\n" +
    "                            <div ng-message=\"minlength\">The description must be more than 4 characters long.</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </md-input-container>\r" +
    "\n" +
    "                    <md-input-container class=\"md-block\">\r" +
    "\n" +
    "                        <label>Password</label>\r" +
    "\n" +
    "                        <input type=\"password\" minLength=\"4\" required  name=\"pwd\" ng-model=\"vm.user.password\">\r" +
    "\n" +
    "                        <div ng-messages=\"connexionform.pwd.$error\">\r" +
    "\n" +
    "                            <div ng-message=\"required\">This is required.</div>\r" +
    "\n" +
    "                            <div ng-message=\"minlength\">The description must be more than 4 characters long.</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </md-input-container>\r" +
    "\n" +
    "                    <div layout=\"column\" layout-align=\"center center\">\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "                            <md-button  type=\"submit\" ng-click=\"vm.signIn()\" class=\"md-raised md-primary\">Sign in</md-button>\r" +
    "\n" +
    "                        </div>                          \r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </md-content>\r" +
    "\n" +
    "            </form>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <form name=\"registration_form\" ng-show=\"vm.showNewAccount\">\r" +
    "\n" +
    "                <md-content layout=\"column\" layout-padding=\"\">\r" +
    "\n" +
    "                    <md-input-container class=\"md-block\">\r" +
    "\n" +
    "                        <label>First name</label>\r" +
    "\n" +
    "                        <input minLength=\"4\" required  name=\"firstName\" ng-model=\"vm.newUser.firstName\">\r" +
    "\n" +
    "                        <div ng-messages=\"registration_form.firstName.$error\">\r" +
    "\n" +
    "                            <div ng-message=\"required\">This is required.</div>\r" +
    "\n" +
    "                            <div ng-message=\"minlength\">The description must be more than 4 characters long.</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </md-input-container>\r" +
    "\n" +
    "                    <md-input-container class=\"md-block\">\r" +
    "\n" +
    "                        <label>Last name</label>\r" +
    "\n" +
    "                        <input minLength=\"4\" required  name=\"lastname\" ng-model=\"vm.newUser.lastName\">\r" +
    "\n" +
    "                        <div ng-messages=\"registration_form.lastname.$error\">\r" +
    "\n" +
    "                            <div ng-message=\"required\">This is required.</div>\r" +
    "\n" +
    "                            <div ng-message=\"minlength\">The description must be more than 4 characters long.</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </md-input-container>\r" +
    "\n" +
    "                    <md-input-container class=\"md-block\">\r" +
    "\n" +
    "                        <label>Email</label>\r" +
    "\n" +
    "                        <input minLength=\"4\" required  name=\"email\" ng-model=\"vm.newUser.email\" ng-pattern=\"/^.+@.+\\..+$/\">\r" +
    "\n" +
    "                        <div ng-messages=\"registration_form.email.$error\">\r" +
    "\n" +
    "                            <div ng-message=\"required\">This is required.</div>\r" +
    "\n" +
    "                            <div ng-message=\"minLength\">The description must be more than 4 characters long.</div>\r" +
    "\n" +
    "                            <div ng-message=\"pattern\">This email must look like an e-mail address</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </md-input-container>\r" +
    "\n" +
    "                    <md-input-container class=\"md-block\">\r" +
    "\n" +
    "                            <label>Username</label>\r" +
    "\n" +
    "                            <input minLength=\"4\" required  name=\"unnew\" ng-model=\"vm.newUser.username\">\r" +
    "\n" +
    "                            <div ng-messages=\"registration_form.unnew.$error\">\r" +
    "\n" +
    "                                <div ng-message=\"required\">This is required.</div>\r" +
    "\n" +
    "                                <div ng-message=\"minlength\">The description must be more than 4 characters long.</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "                    <md-input-container class=\"md-block\">\r" +
    "\n" +
    "                        <label>Password</label>\r" +
    "\n" +
    "                        <input minlength=\"4\" type=\"password\" required name=\"pwdnew\" ng-model=\"vm.newUser.password\">\r" +
    "\n" +
    "                        <div ng-messages=\"registration_form.pwdnew.$error\">\r" +
    "\n" +
    "                            <div ng-message=\"required\">This is required.</div>\r" +
    "\n" +
    "                            <div ng-message=\"minLength\">The description must be more than 4 characters long.</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </md-input-container>\r" +
    "\n" +
    "                    <md-input-container class=\"md-block\">\r" +
    "\n" +
    "                            <label>Confirm Password</label>\r" +
    "\n" +
    "                            <input type=\"password\" minLength=\"4\" required  name=\"confirmPassword\" ng-model=\"vm.confirmPassword\" compare-to=\"vm.newUser.password\">\r" +
    "\n" +
    "                            <div ng-messages=\"registration_form.confirmPassword.$error\">\r" +
    "\n" +
    "                                <div ng-message=\"required\">This is required.</div>\r" +
    "\n" +
    "                                <div ng-message=\"minLength\">The description must be more than 4 characters long.</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "                    <div layout=\"column\" layout-align=\"center center\">\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "                            <md-button type=\"submit\" ng-click=\"vm.createAccount()\" class=\"md-raised md-primary\">Inscription</md-button>\r" +
    "\n" +
    "                        </div>                          \r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </md-content>\r" +
    "\n" +
    "            </form>\r" +
    "\n" +
    "        </md-card-content>\r" +
    "\n" +
    "    </md-card>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div layout=\"colum\" layout-align=\"center center\" flex=\"80\">\r" +
    "\n" +
    "        <div id=\"toaster\"></div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "    "
  );


  $templateCache.put('app/modules/home/dashboard.html',
    "<div class=\"md-padding\" flex layout-sm=\"column\" style=\"background-color:white\">\n" +
    "    <md-card class=\"text-left\">\n" +
    "        <md-card-content>\n" +
    "           <h2>Welcome to the \"users and teams\" microservice.</h2>\n" +
    "          \n" +
    "           <p>The purpose of this application is to show you the possibilities offered by our microservice.</p>           \n" +
    "\n" +
    "           <p><h3>Our service offers you</h3>\n" +
    "               <ul>\n" +
    "                   <il>1. Create an user</il>\n" +
    "                   <li>2. Sign in with an existing account</li>\n" +
    "                   <li>3. Update an existing account (except the username)</li>\n" +
    "                   <li>4. Get an user with it username</li>\n" +
    "                   <li>5. Get the users list</li>\n" +
    "                   <li>6. Create a team</li>\n" +
    "                   <li>7. Get the list members of a team (with name of team)</li>\n" +
    "                   <li>8. Get a team (with name of team)</li>\n" +
    "                   <li>9. Update a team (add new member or change the name of the team</li>\n" +
    "               </ul>\n" +
    "           </p>\n" +
    "\n" +
    "           <p>Step 9 :In this example, the name change for a team is not presented.</p>\n" +
    "\n" +
    "           <p><h3>Menu of navigation:</h3>\n" +
    "               <ul>\n" +
    "                    <li><b>Sign-in / Sign up</b>: you can create an user or sign in.</li>\n" +
    "                    <li><b>Profile</b>: you can see the user infos, update that, create a team for the actually user logged, look that teams, and look the members of that teams, add members on a team, look all users.</li>\n" +
    "                </ul>\n" +
    "            </p>\n" +
    "        </md-card-content>\n" +
    "       \n" +
    "    </md-card>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/home/home.html',
    "<md-sidenav layout=\"column\" class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"left\" md-is-locked-open=\"$mdMedia('gt-md')\">\n" +
    "    <div ng-controller=\"SidenavCtrl as vm\" ng-cloak>\n" +
    "        <md-toolbar class=\"md-tall md-hue-2\">\n" +
    "            <div layout=\"column\" class=\"md-toolbar-tools-bottom inset\">\n" +
    "                <div layout=\"row\">\n" +
    "                    <div flex=\"80\" style=\"margin-top: 10px;\">\n" +
    "                        <div>users-and-teams</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </md-toolbar>\n" +
    "        <md-list>\n" +
    "            <md-list>\n" +
    "                <md-list-item ui-sref=\"home.dashboard\">\n" +
    "                    <div class=\"inset\">\n" +
    "                        <md-icon>face</md-icon>\n" +
    "                    </div>\n" +
    "                    <p> Welcome </p>\n" +
    "                </md-list-item>\n" +
    "                <md-list-item ui-sref=\"home.connexion\">\n" +
    "                    <div class=\"inset\">\n" +
    "                        <md-icon>lock_outline</md-icon>\n" +
    "                    </div>\n" +
    "                    <p> Sign in / Sign up </p>\n" +
    "                </md-list-item>\n" +
    "                <md-list-item ui-sref=\"home.profile\">\n" +
    "                    <div class=\"inset\">\n" +
    "                        <md-icon>face</md-icon>\n" +
    "                    </div>\n" +
    "                    <p> Profile </p>\n" +
    "                </md-list-item>\n" +
    "        </md-list>\n" +
    "    </div>\n" +
    "</md-sidenav>\n" +
    "<div layout=\"column\" class=\"relative\" layout-fill role=\"main\" ng-controller=\"LayoutCtrl as layout\" ng-cloak>\n" +
    "        <md-toolbar>\n" +
    "            <div class=\"md-toolbar-tools\">\n" +
    "                <md-button ng-click=\"layout.toggleSidenav('left')\" hide-gt-md aria-label=\"Menu\">\n" +
    "                    <ng-md-icon icon=\"menu\"></ng-md-icon>\n" +
    "                </md-button>\n" +
    "                <span flex></span>\n" +
    "            </div>\n" +
    "        </md-toolbar>\n" +
    "    <md-content layout=\"column\" flex md-scroll-y style=\"background-color:#DCDCDC\">\n" +
    "        <div ui-view></div>\n" +
    "    </md-content>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/layouts/main-page/main-page.html',
    "    <md-toolbar ng-show=\"!showSearch\">\n" +
    "        <div class=\"md-toolbar-tools\">\n" +
    "            <md-button ng-click=\"layout.toggleSidenav('left')\" hide-gt-md aria-label=\"Menu\">\n" +
    "                <ng-md-icon icon=\"menu\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <h3>\n" +
    "                <a href=\"/\">users-and-teams</a>\n" +
    "            </h3>\n" +
    "            <span flex></span>\n" +
    "            <md-button aria-label=\"Search\" ng-click=\"showSearch = !showSearch\">\n" +
    "                <ng-md-icon icon=\"search\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <md-menu>\n" +
    "                <md-button aria-label=\"Open Settings\" ng-click=\"layout.openMenu($mdOpenMenu, $event)\">\n" +
    "                            <md-icon> more_vert </md-icon>\n" +
    "                </md-button>\n" +
    "                <md-menu-content width=\"4\">\n" +
    "                    <md-menu-item>\n" +
    "                        <md-button ng-click=\"layout.changeProfile($event)\">\n" +
    "                            <md-icon>face</md-icon>\n" +
    "                            Profile\n" +
    "                        </md-button>\n" +
    "                    </md-menu-item>\n" +
    "                    <md-menu-item>\n" +
    "                        <md-button ng-click=\"layout.changePassword()\">\n" +
    "                            <md-icon>lock</md-icon>\n" +
    "                            Password\n" +
    "                        </md-button>\n" +
    "                    </md-menu-item>\n" +
    "                    <md-menu-divider></md-menu-divider>\n" +
    "                    <md-menu-item>\n" +
    "                        <md-button ng-click=\"layout.logOut()\">\n" +
    "                            <md-icon>power_settings_new</md-icon>\n" +
    "                            Logout\n" +
    "                        </md-button>\n" +
    "                    </md-menu-item>\n" +
    "                </md-menu-content>\n" +
    "            </md-menu>\n" +
    "        </div>\n" +
    "    </md-toolbar>\n" +
    "    <md-toolbar class=\"md-hue-1\" ng-show=\"showSearch\">\n" +
    "        <div class=\"md-toolbar-tools\">\n" +
    "            <md-button ng-click=\"showSearch = !showSearch\" aria-label=\"Back\">\n" +
    "                <ng-md-icon icon=\"arrow_back\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <h3 flex=\"10\">\n" +
    "                Back\n" +
    "            </h3>\n" +
    "            <md-input-container md-theme=\"input\" flex>\n" +
    "                <label>&nbsp;</label>\n" +
    "                <input ng-model=\"search.who\" placeholder=\"Search ...\">\n" +
    "            </md-input-container>\n" +
    "\n" +
    "        </div>\n" +
    "    </md-toolbar>\n" +
    "    <md-content class=\"md-blue-grey-theme\" flex md-scroll-y>\n" +
    "        <ui-view layout=\"column\" layout-fill layout-padding>\n" +
    "\n" +
    "\n" +
    "        </ui-view>\n" +
    "    </md-content>\n"
  );


  $templateCache.put('app/modules/layouts/side-nav/sidenav.html',
    "        <md-toolbar class=\"md-tall md-hue-2\">\n" +
    "            <div layout=\"column\" class=\"md-toolbar-tools-bottom inset\">\n" +
    "                <div layout=\"row\">\n" +
    "                    <div flex=\"20\">\n" +
    "                        <img style=\"width: 36px; height: 36px; border-radius: 50%\"\n" +
    "                             actual-src=\"data:image/jpeg;base64,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\"\n" +
    "                             showloader=\"\" loader-class=\"preload\" loader-src=\"app/assets/images/loader.gif\"\n" +
    "                             src=\"data:image/jpeg;base64,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\">\n" +
    "                    </div>\n" +
    "                    <div flex=\"80\" style=\"margin-top: 10px;font-size: 1em;\">\n" +
    "                        <div>Fernando Monteiro</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </md-toolbar>\n" +
    "        <md-list>\n" +
    "            <md-list-item ng-repeat=\"item in vm.menu\" ng-click=\"vm.navigateTo(item.link)\" >\n" +
    "                <div class=\"inset\" ng-show=\"item.icon\">\n" +
    "                    <ng-md-icon icon=\"{{item.icon}}\"></ng-md-icon>\n" +
    "                </div>\n" +
    "                <p> {{ item.name }}</p>\n" +
    "            </md-list-item>\n" +
    "            <md-divider></md-divider>\n" +
    "            <md-subheader>Admin</md-subheader>\n" +
    "            <md-list-item ng-repeat=\"item in vm.admin\" ng-click=\"vm.showSettingsBottom($event)\" >\n" +
    "                <div class=\"inset\">\n" +
    "                    <ng-md-icon icon=\"{{item.icon}}\"></ng-md-icon>\n" +
    "                </div>\n" +
    "                <p> {{ item.title }}</p>\n" +
    "            </md-list-item>\n" +
    "        </md-list>\n"
  );


  $templateCache.put('app/modules/profile/profile.html',
    "<div class=\"md-padding\" flex layout-sm=\"column\" ng-show=!vm.cheklogin()>\n" +
    "  <md-card>\n" +
    "    <md-card-content>\n" +
    "      <p>You must be logged in to access this section.</p>\n" +
    "      <p><a href=\"http://127.0.0.1:4000/#!/connexion\">Click here !</a> </p>\n" +
    "    </md-card-content>\n" +
    "  </md-card>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"md-padding\" flex layout-sm=\"column\" ng-show=vm.cheklogin()>\n" +
    "  <md-card>\n" +
    "    <md-card-content>\n" +
    "      <md-card md-theme=\"{{ showDarkTheme ? 'dark-blue' : 'default' }}\" md-theme-watch>\n" +
    "        <md-card-title>\n" +
    "          <md-card-title-text>\n" +
    "            <span class=\"md-headline\">Username : {{vm.profile.username}}</span>\n" +
    "            <span class=\"md-subhead\">First name : {{vm.profile.firstName}} </span>\n" +
    "            <span class=\"md-subhead\">Last name : {{vm.profile.lastName}} </span>\n" +
    "            <span class=\"md-subhead\">Email : {{vm.profile.email}}</span>\n" +
    "          </md-card-title-text>\n" +
    "          <md-card-title-media>\n" +
    "            <div class=\"md-media-md card-media\" src></div>\n" +
    "          </md-card-title-media>\n" +
    "        </md-card-title>\n" +
    "        <md-card-actions layout=\"row\" layout-align=\"end\" >\n" +
    "          <md-button class=\"md-raised md-primary\" ng-disabled=\"vm.isUpdatingOrCreating()\"  ng-click=\"vm.showCreateTeam()\">Create team</md-button>\n" +
    "           <md-button class=\"md-raised md-primary\" ng-disabled=\"vm.isUpdatingOrCreating()\" ng-click=\"vm.update()\">Update account</md-button>\n" +
    "        </md-card-actions>\n" +
    "    </md-card-content>\n" +
    "  </md-card>\n" +
    "\n" +
    "  <!-- Informations du users et de ces teams-->\n" +
    "  <div layout=\"row\" ng-show=\"!vm.isUpdating\">\n" +
    "    <div flex=40>\n" +
    "      <md-card>\n" +
    "        <md-card-content>\n" +
    "          <md-list class=\"md-dense\">\n" +
    "            <md-subheader class=\"md-no-sticky\">List teams</md-subheader>\n" +
    "              <md-list-item class=\"md-3-line\" ng-repeat=\"item in vm.listTeams.teams\">         \n" +
    "                <div class=\"md-list-item-text\" layout=\"column\">\n" +
    "                  <h3>Name : {{ item.name }}</h3>     \n" +
    "                  <p>Id : {{ item.id }}</p>\n" +
    "                </div>\n" +
    "              </md-list-item>\n" +
    "            <md-divider></md-divider>\n" +
    "          </md-list>\n" +
    "        </md-card-content>\n" +
    "      </md-card>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Card right -->\n" +
    "    <div flex=\"60\">\n" +
    "       <md-card layout=\"row\">\n" +
    "         <!-- Create a new team form, show with button create team, hide with cancel or create -->\n" +
    "        <md-card-content ng-show=\"vm.isTeamCreating\" ng-show=\"!vm.showNewAccount\" flex=\"100\" layout-align=\"center center\">\n" +
    "          <form name=\"formTeam\"> \n" +
    "            <md-content layout=\"column\" layout-padding>\n" +
    "              <md-input-container class=\"md-block\">      \n" +
    "                <label>Team name</label>\n" +
    "                <input minLength=\"4\" required  name=\"teamName\" ng-model=\"vm.createTeamName\">\n" +
    "                <div ng-messages=\"formTeam.un.$error\">\n" +
    "                    <div ng-message=\"required\">This is required.</div>\n" +
    "                    <div ng-message=\"minlength\">The description must be more than 4 characters long.</div>\n" +
    "                </div>\n" +
    "              </md-input-container>\n" +
    "         \n" +
    "              <md-card-actions>\n" +
    "                  <md-button  class=\"md-raised md-primary\" ng-click=\"vm.hideCreateTeam()\">Cancel</md-button>\n" +
    "                  <md-button type=\"submit\" class=\"md-raised md-primary\"  ng-click=\"vm.createTeam()\">Create</md-button>\n" +
    "              </md-card-actions>\n" +
    "            </md-content>\n" +
    "          </form>   \n" +
    "        </md-card-content>\n" +
    "   \n" +
    "        <!-- List details teams and add new user on team, show if create team is hide -->\n" +
    "        <md-card-content flex=\"60\" ng-show=\"!vm.isTeamCreating\"> \n" +
    "            <md-list class=\"md-dense\">\n" +
    "              <md-subheader class=\"md-no-sticky\">Members of the selected team</md-subheader>\n" +
    "              <md-list-item class=\"md-3-line\" ng-repeat=\"item in vm.listTeams.select.members\">         \n" +
    "                  <div class=\"md-list-item-text\" layout=\"column\">\n" +
    "                    <h3>{{ item.username }}</h3>\n" +
    "                    <p>{{ item.firstName }} {{ item.lastName }}</p>\n" +
    "                    <p>{{ item.email }}</p>\n" +
    "                  </div>\n" +
    "                  </md-list-item>\n" +
    "              <md-divider ></md-divider>\n" +
    "              </md-list>\n" +
    "        </md-card-content>\n" +
    "        \n" +
    "        <div layout=\"column\" ng-show=\"!vm.isTeamCreating\" flex=\"40\">\n" +
    "          <form name=\"updateTeamForm\">\n" +
    "            <md-card-content >\n" +
    "                <label>Select your team</label>\n" +
    "                <md-select class=\"md-block\" ng-change=\"vm.selectTeam()\" ng-model=\"vm.nameTeamSelect\">\n" +
    "                  <md-option \n" +
    "                      ng-repeat=\"item in vm.listTeams.teams\" value=\"{{item.name}}\">{{item.name}}\n" +
    "                  </md-option>\n" +
    "                </md-select> \n" +
    "\n" +
    "                <label >Select an user</label>\n" +
    "                <md-select class=\"md-block\" ng-change=\"vm.selectUser()\" ng-model=\"vm.selectUserOnList\">\n" +
    "                  <md-option \n" +
    "                      ng-repeat=\"item in vm.listUsers.users\" value=\"{{item.username}}\">{{item.username}}\n" +
    "                  </md-option>\n" +
    "                </md-select> \n" +
    "           \n" +
    "            <md-card-actions>\n" +
    "                <md-button type=\"submit\" class=\"md-raised md-primary\"  ng-click=\"vm.updateTeam()\">Add user on team</md-button>\n" +
    "            </md-card-actions>\n" +
    "          </md-card-content>\n" +
    "          </form>\n" +
    "        </div>\n" +
    "      </md-card>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- Formulaire d'update -->\n" +
    "  <md-card ng-show=\"vm.isUpdating\">\n" +
    "    <md-card-content>\n" +
    "        <form name=\"updateForm\" >\n" +
    "            <md-content layout=\"column\" layout-padding=\"\">\n" +
    "              <div layout=\"row\" >\n" +
    "              <div flex=\"30\"style=\"margin-right:10px; margin-left:10px;\">\n" +
    "                <md-input-container class=\"md-block\">\n" +
    "                    <label>First name</label>\n" +
    "                    <input minLength=\"4\" required  name=\"firstName\" ng-model=\"vm.profileUpdate.firstName\">\n" +
    "                    <div ng-messages=\"updateForm.firstName.$error\">\n" +
    "                        <div ng-message=\"required\">This is required.</div>\n" +
    "                        <div ng-message=\"minlength\">The description must be more than 4 characters long.</div>\n" +
    "                    </div>\n" +
    "                </md-input-container>\n" +
    "              </div>\n" +
    "              <div flex=\"30\"style=\"margin-right:10px; margin-left:10px;\">\n" +
    "                <md-input-container class=\"md-block\">\n" +
    "                    <label>Last name</label>\n" +
    "                    <input minLength=\"4\" required  name=\"lastname\" ng-model=\"vm.profileUpdate.lastName\">\n" +
    "                    <div ng-messages=\"updateForm.lastname.$error\">\n" +
    "                        <div ng-message=\"required\">This is required.</div>\n" +
    "                        <div ng-message=\"minlength\">The description must be more than 4 characters long.</div>\n" +
    "                    </div>\n" +
    "                </md-input-container>\n" +
    "              </div>\n" +
    "              <div flex=\"30\"style=\"margin-right:10px; margin-left:10px;\">\n" +
    "                  <md-input-container class=\"md-block\">\n" +
    "                      <label>Email</label>\n" +
    "                      <input minLength=\"4\" required  name=\"email\" ng-model=\"vm.profileUpdate.email\" ng-pattern=\"/^.+@.+\\..+$/\">\n" +
    "                      <div ng-messages=\"updateForm.email.$error\">\n" +
    "                          <div ng-message=\"required\">This is required.</div>\n" +
    "                          <div ng-message=\"minLength\">The description must be more than 4 characters long.</div>\n" +
    "                          <div ng-message=\"pattern\">This email must look like an e-mail address</div>\n" +
    "                      </div>\n" +
    "                  </md-input-container>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div layout=\"row\">\n" +
    "                  <div flex=\"50\"style=\"margin-right:10px; margin-left:10px;\">\n" +
    "                  <md-input-container class=\"md-block\">\n" +
    "                      <label>Password</label>\n" +
    "                      <input minlength=\"4\" type=\"password\" required name=\"pwdnew\" ng-model=\"vm.profileUpdate.password\">\n" +
    "                      <div ng-messages=\"updateForm.pwdnew.$error\">\n" +
    "                          <div ng-message=\"required\">This is required.</div>\n" +
    "                          <div ng-message=\"minLength\">The description must be more than 4 characters long.</div>\n" +
    "                      </div>\n" +
    "                  </md-input-container>\n" +
    "                  </div>\n" +
    "                  <div flex=\"50\"style=\"margin-right:10px; margin-left:10px;\">\n" +
    "                    <md-input-container class=\"md-block\">\n" +
    "                            <label>Confirm Password</label>\n" +
    "                            <input type=\"password\" minLength=\"4\" required  name=\"confirm_password\" ng-model=\"vm.profileUpdate.confirm_password\" compare-to=\"vm.profileUpdate.password\">\n" +
    "                            <div ng-messages=\"updateForm.confirm_password.$error\">\n" +
    "                                <div ng-message=\"required\">This is required.</div>\n" +
    "                                <div ng-message=\"minLength\">The description must be more than 4 characters long.</div>\n" +
    "                            </div>\n" +
    "                    </md-input-container>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div layout=\"column\" layout-align=\"center center\">\n" +
    "                    <div>\n" +
    "                        <md-button ng-click=\"vm.cancelUpdate()\" class=\"md-raised md-primary\">Cancel</md-button>\n" +
    "                        <md-button type=\"submit\" ng-click=\"vm.putUpdate()\" class=\"md-raised md-primary\">Update</md-button>\n" +
    "                    </div>                          \n" +
    "                </div>\n" +
    "            </md-content>\n" +
    "        </form>\n" +
    "      </div>\n" +
    "    </md-card-content>\n" +
    "  </md-card>\n" +
    "</div>\n"
  );

}]);
