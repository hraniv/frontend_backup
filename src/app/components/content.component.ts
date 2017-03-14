import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'content',
    templateUrl: 'content.component.ng.html',
})
export class ContentComponent {
    articles: Article[];

    constructor() {
        this.articles = [
            {
                id: 1,
                title: 'psum dolor sit amet, consectetur adipiscing elit.',
                img: null,
                content: 'Phasellus eu tristique risus, at posuere elit. Nulla bibendum arcu mi, eget dapibus justo efficitur et. Ut ut maximus ante, vitae imperdiet sem. Quisque metus lacus, consectetur aliquam sollicitudin eu, dignissim et odio. Aliquam venenatis dictum metus, nec lobortis magna mattis sit amet. Mauris nec sagittis turpis. Nam dictum urna vel ipsum bibendum faucibus. Proin facilisis auctor nulla vel ornare. Nulla facilisi. Aenean id placerat tortor. Nunc sollicitudin leo eget risus tincidunt, vitae fermentum justo maximus. Integer ac neque id nunc lacinia dapibus. Quisque id luctus velit.'
            },
            {
                id: 2,
                title: 'eu diam eu augue vehicula finibus et sed urna',
                img: null,
                content: 'Praesent convallis ultricies ligula, at sagittis eros varius pulvinar. Curabitur viverra lobortis tortor, eget maximus turpis venenatis sit amet. Maecenas fermentum nulla lectus, eget mattis eros pretium eu. Aenean nunc turpis, venenatis nec neque feugiat, pretium blandit ex. In hac habitasse platea dictumst. Cras sed ex in est hendrerit rutrum. Nulla facilisi. Aenean in urna a lorem accumsan accumsan eget sed leo. Duis ligula odio, scelerisque fermentum velit ut, porta hendrerit magna. Etiam ac urna nec quam eleifend rutrum rhoncus et augue. Duis aliquet ultrices quam.'
            },
            {
                id: 3,
                title: 'aculis ex eget elementum vehicula.',
                img: null,
                content: 'Maecenas mi lorem, tempor et nisl vitae, vestibulum porta eros. Donec volutpat suscipit ultrices. In varius in metus vitae ultrices. Nulla facilisi. Maecenas quis enim in leo tincidunt aliquet vitae eget odio. Mauris dignissim est non ligula finibus bibendum. Suspendisse eu posuere libero, sed rhoncus lorem. Donec ut nisi consequat, aliquam sapien non, dignissim dui. In erat eros, pellentesque quis mauris id, congue facilisis metus. Fusce vehicula eget libero nec pretium. Vestibulum mollis consectetur lorem sed lacinia. In a ex suscipit, sodales erat eu, consequat nisl. In nunc leo, aliquam at ullamcorper eu, lobortis vel sem. Donec pretium tellus ac orci maximus cursus. Proin fringilla pretium leo quis gravida. Etiam lobortis eget est id commodo. Mauris quis nisl et justo placerat aliquet ut sed nisi. Sed consectetur justo at neque aliquam tempus. Quisque congue ligula neque. Quisque pharetra a sem tincidunt lacinia. Proin cursus velit vel dolor pretium egestas. Aliquam sed ipsum vel elit molestie congue. Morbi ultricies varius elementum. Sed viverra arcu quis mi rutrum, et malesuada orci viverra. Sed porta nibh quam, ut semper risus efficitur id.'
            },
            {
                id: 4,
                title: 'uis lorem vel augue aliquet feugiat',
                img: null,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae libero ligula. In suscipit maximus tellus et feugiat. Fusce id massa sed quam tristique vulputate consectetur in quam. Duis blandit, nunc eleifend malesuada pharetra, urna justo pretium nisi, ut dapibus neque ipsum quis ipsum. Nam id lectus est. Donec euismod leo ut ultricies fermentum. Praesent in lacus quam. Fusce varius nisi nibh, non facilisis massa dignissim eu. Suspendisse nunc est, dignissim nec tellus quis, porttitor lobortis leo. Duis condimentum ex vitae pretium volutpat. Nam non blandit magna. Aliquam bibendum, metus a vestibulum sodales, erat neque fringilla massa, feugiat tempus massa turpis pharetra tortor. Donec et imperdiet felis. Maecenas mi lorem, tempor et nisl vitae, vestibulum porta eros. Donec volutpat suscipit ultrices. In varius in metus vitae ultrices. Nulla facilisi. Maecenas quis enim in leo tincidunt aliquet vitae eget odio. Mauris dignissim est non ligula finibus bibendum. Suspendisse eu posuere libero, sed rhoncus lorem. Donec ut nisi consequat, aliquam sapien non, dignissim dui. In erat eros, pellentesque quis mauris id, congue facilisis metus. Fusce vehicula eget libero nec pretium. Vestibulum mollis consectetur lorem sed lacinia. In a ex suscipit, sodales erat eu, consequat nisl. In nunc leo, aliquam at ullamcorper eu, lobortis vel sem. Donec pretium tellus ac orci maximus cursus. Proin fringilla pretium leo quis gravida. Etiam lobortis eget est id commodo. Mauris quis nisl et justo placerat aliquet ut sed nisi. Sed consectetur justo at neque aliquam tempus. Quisque congue ligula neque. Quisque pharetra a sem tincidunt lacinia. Proin cursus velit vel dolor pretium egestas. Aliquam sed ipsum vel elit molestie congue. Morbi ultricies varius elementum. Sed viverra arcu quis mi rutrum, et malesuada orci viverra. Sed porta nibh quam, ut semper risus efficitur id.'
            },
            {
                id: 5,
                title: 'libero mollis, mollis odio eu, porta ex.',
                img: null,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae libero ligula. In suscipit maximus tellus et feugiat. Fusce id massa sed quam tristique vulputate consectetur in quam. Duis blandit, nunc eleifend malesuada pharetra, urna justo pretium nisi, ut dapibus neque ipsum quis ipsum. Nam id lectus est. Donec euismod leo ut ultricies fermentum. Praesent in lacus quam. Fusce varius nisi nibh, non facilisis massa dignissim eu. Suspendisse nunc est, dignissim nec tellus quis, porttitor lobortis leo. Duis condimentum ex vitae pretium volutpat. Nam non blandit magna. Aliquam bibendum, metus a vestibulum sodales, erat neque fringilla massa, feugiat tempus massa turpis pharetra tortor. Donec et imperdiet felis. Maecenas mi lorem, tempor et nisl vitae, vestibulum porta eros. Donec volutpat suscipit ultrices. In varius in metus vitae ultrices. Nulla facilisi. Maecenas quis enim in leo tincidunt aliquet vitae eget odio. Mauris dignissim est non ligula finibus bibendum. Suspendisse eu posuere libero, sed rhoncus lorem. Donec ut nisi consequat, aliquam sapien non, dignissim dui. In erat eros, pellentesque quis mauris id, congue facilisis metus. Fusce vehicula eget libero nec pretium. Vestibulum mollis consectetur lorem sed lacinia. In a ex suscipit, sodales erat eu, consequat nisl. In nunc leo, aliquam at ullamcorper eu, lobortis vel sem. Donec pretium tellus ac orci maximus cursus. Proin fringilla pretium leo quis gravida. Etiam lobortis eget est id commodo. Mauris quis nisl et justo placerat aliquet ut sed nisi. Sed consectetur justo at neque aliquam tempus. Quisque congue ligula neque. Quisque pharetra a sem tincidunt lacinia. Proin cursus velit vel dolor pretium egestas. Aliquam sed ipsum vel elit molestie congue. Morbi ultricies varius elementum. Sed viverra arcu quis mi rutrum, et malesuada orci viverra. Sed porta nibh quam, ut semper risus efficitur id.'
            }]
    }
}

interface Article {
    id: number;
    title: string;
    content: string;
    img?: string;
}