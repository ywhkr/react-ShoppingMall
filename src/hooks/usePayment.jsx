import { useRecoilValue } from "recoil";
import { priceState, userState } from "../store/index";
import useCart from "./useCart";

export default function usePayment() {
  const user = useRecoilValue(userState);
  const price = useRecoilValue(priceState);
  const { email, displayName } = user;

  const {
    cartQuery: { data: products },
    refreshItem,
  } = useCart();

  const onClickPayment = () => {
    const { IMP } = window;
    IMP.init("imp78120371");

    const data = {
      pg: "nice", // PG사
      pay_method: "card", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`,
      amount: price, // 결제금액
      name: `${products[0].title} 외 ${products.length - 1}건`, // 주문명
      buyer_name: displayName, // 구매자 이름
      buyer_email: email,
    };

    IMP.request_pay(data, callback);
  };

  function callback(response) {
    const { success, merchant_uid, error_msg } = response;

    if (success) {
      refreshItem.mutate();
      alert(`결제 성공. 주문이 완료되었습니다. 주문번호: ${merchant_uid}`);
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }

  return { onClickPayment };
}
