import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions } from 'swiper';
import { PaginationOptions } from 'swiper/types/components/pagination';
import { ScrollbarOptions } from 'swiper/types/components/scrollbar';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public slides = [];
  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 4,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };
  private scrollbar: ScrollbarOptions = {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  };

  private pagination: PaginationOptions = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };
  largeImage: any;
  isSelected: any;
  image: any = {};
  activeId = 0;
  constructor(private homeSerive: HomeService) { }

  ngOnInit(): void {
    this.getImages()
  }
  getImages() {
    this.slides = this.homeSerive.getTemplates();
    this.image = this.slides[this.activeId];
  }
  public show: boolean = true
  public disabled: boolean = false;
  public toggleKeyboardControl(): void {
    this.config.keyboard = !this.config.keyboard;
  }
  public toggleMouseWheelControl(): void {
    this.config.mousewheel = !this.config.mousewheel;
  }
  public onIndexChange(index: number): void {
    // console.log('Swiper index: ', index);
  }
  public onSwiperEvent(event: string): void {
    // console.log('Swiper event: ', event);
  }
  thumbnailClicked(slide, i) {
    this.isSelected = slide.id
    this.activeId = i
    this.image = slide
  }

  next() {
    if (this.activeId < this.slides.length - 1) {
      this.activeId++
    }
    this.image = this.slides[this.activeId]
  }

  prev() {
    if (this.activeId !== 0 && this.activeId <= this.slides.length - 1) {
      this.activeId--
    }
    this.image = this.slides[this.activeId]
  }
}
