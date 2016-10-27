import { Controller } from 'angular-ecmascript/module-helpers';
 
export default class PerfilCtrl extends Controller {
	
	updatePicture () {
    MeteorCameraUI.getPicture({ width: 60, height: 60 }, (err, data) => {
      if (err) return this.handleError(err);
 
      this.$ionicLoading.show({
        template: 'Updating picture...'
      });
 
      this.callMethod('updatePicture', data, (err) => {
        this.$ionicLoading.hide();
        this.handleError(err);
      });
    });
  }
}

PerfilCtrl.$name = 'PerfilCtrl';
PerfilCtrl.$inject = ['$state', '$ionicLoading', '$ionicPopup', '$log'];