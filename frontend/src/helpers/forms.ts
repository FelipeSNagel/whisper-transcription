import * as Yup from 'yup';
import { sweetAlert } from 'utils';

export const onValidationSchema = async (
  shape: Record<string, Yup.AnySchema>,
  data: any,
  showSweetAlert?: boolean
) => {
  const response = {
    success: false,
    message: null,
  };
  const schema = Yup.object().shape(shape);

  await schema
    .validate(data)
    .then(() => {
      response.success = true;
      response.message = null;

      return response;
    })
    .catch((err: any) => {
      if (showSweetAlert === undefined || showSweetAlert) {
        sweetAlert.fire({
          title: 'Cadastro!',
          text: err.message,
          icon: 'error',
        });
      }

      response.success = false;
      response.message = err.message;

      return response;
    });

  return response;
};
