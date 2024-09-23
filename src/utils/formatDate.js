import moment from "moment/moment";
import 'moment/locale/tr'

const formatDate = (unix_time) => {

    if (!unix_time === 0 || !unix_time) return 'Bilinmiyor'
    const formated = new Date(unix_time * 1000);
    return moment(formated).calendar()
}

export default formatDate;