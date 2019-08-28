/**
 * @namespace ts/helpers/HandlerFunction
 */
export interface HandlerFunction{
  /**
   * @access public
   * @param Response res
   * @return Response
   */
  (res:Response):Response;
}
