class Tooltip {
  button: HTMLButtonElement;

  constructor() {
    this.button = document.querySelector('button') as HTMLButtonElement;
    this.startWork();
  }

  get crateTooltip(): HTMLElement {
    const div_ = document.createElement('div') as HTMLDivElement;
    const span_title = document.createElement('span');
    const span_content = document.createElement('span');

    span_title.classList.add('title_alt');
    span_title.innerHTML = 'Propover title';

    span_content.innerHTML = "And here's some amazing content. It's vere engaging, Fight?";

    div_.insertAdjacentElement('beforeend', span_title);
    div_.insertAdjacentElement('beforeend', span_content)
    return div_
  }

  get getlocationElement() {
    /**
     * 'right / top:' -  Получает растояние елемента от окна
     * 'heightTooltip' - высота tooltip
     */
    const span = document.querySelector('#buttons span');
    if (span !== null) {
      const { right, top } = span.getBoundingClientRect();
      console.log('right / top:', right, top)

      const div_ = document.querySelector('div') as HTMLDivElement;


      // div_.style.top = `${(span.clientHeight) * (-2)}px`
      div_.style.top = `${(span.clientHeight + div_.clientHeight) * (-1) - 10}px`
      console.log();
      // return {
      //   'right': right, 'top': top, 'heightTooltip': span.clientHeight
      // }

    } else console.log('span = null');

    return { 'right': 0, 'top': 0, 'heightTooltip': 0 }
  }

  startWork() {
    this.button.addEventListener('click', (e: Event) => {
      e.preventDefault()
      const body = document.querySelector('body') as HTMLBodyElement;

      if (!document.querySelector('div')) {
        body.insertAdjacentElement('beforeend', this.crateTooltip);
        const div_ = document.querySelector('div') as HTMLDivElement;
        div_.classList.add('active');
        this.getlocationElement;


      } else if (!document.querySelector('div') === false) {
        const div_ = document.querySelector('div') as HTMLDivElement;
        div_.remove();
      }
    });
  }
}

new Tooltip();
