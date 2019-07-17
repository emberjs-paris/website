import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  ajax: inject(),
  session: inject(),

  talkTitle: "",
  talkDescription: "",

  actions: {
    submitTask() {
      this.ajax.request(
        'https://api.github.com/repos/emberjs-paris/website/forks',
        {
          method: 'POST'
        }
      ).then(response => {
        return response
        // console.log(response)
      });
    }
  }
});
