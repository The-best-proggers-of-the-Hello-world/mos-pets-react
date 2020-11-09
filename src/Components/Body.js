import React, {Component} from 'react';
import OutpuLine from './SearchItems/OutputLine'
import SearchBar from "./SearchItems/SearchBar"

export default class Body extends Component {
    render() {
        return (
            <div className="body col-xl-8 col-lg-10 col-md-12">
                <div class="search-settings col-12 row">
                    <div class="page-title col-xl-3 col-md">
                        <p>Животные в приюте</p>
                    </div>
                    <div class="search-types col-xl-6  col-md">
                        <div class="types btn-group">
                            <div data-search="" class="button col">
                                <div class="btn active">Готовы к переезду</div>
                            </div>
                            <div data-search="" class="button col">
                                <div class="btn">Проходят медкомиссию</div>
                            </div>
                            <div data-search="" class="button col">
                                <div class="btn">Поступили недавно</div>
                            </div>
                        </div>
                    </div>
                    <div class="buttons col-xl-3 col-md">
                        <div class="button">
                            <a href="#" class="func">Сортировать</a>
                        </div>
                        <div class="button">
                            <a href="#" class="func">Сформировать отчет</a>
                        </div>
                        <div class="button">
                            <a href="#" class="add">Добавить</a>
                        </div>
                    </div>
                </div>
                <SearchBar></SearchBar>
                <div class="search-result">
                    <div class="table-names">
                        <div class="tcol-1">
                            <p>
                                Карточка
                            </p>
                        </div>
                        <div class="tcol-2">
                            <p>
                                Вид
                            </p>
                        </div>
                        <div class="tcol-3">
                            <p>
                                Кличка
                            </p>
                        </div>
                        <div class="tcol-4">
                            <p>
                                Пол
                            </p>
                        </div>
                        <div class="tcol-5">
                            <p>
                                Возраст, год
                            </p>
                        </div>
                        <div class="tcol-6">
                            <p>
                                Дата поступления
                            </p>
                        </div>
                        <div class="tcol-7">
                            <p>
                                Вольер №
                            </p>
                        </div>
                        <div class="tcol-8">
                            <p>
                                Индетификационная метка
                            </p>
                        </div>
                        <div class="tcol-9">
                            <p>
                                Статус
                            </p>
                        </div>                        <div class="tcol-10">
                            <p></p>

                        </div>
                    </div>
                    {
                    ([1,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3]).map(() => (
                        <OutpuLine></OutpuLine>
                    ))
                } </div>
            </div>
        );;
    }
}
