//package com.projectname.project.client.application.home;
//
//import javax.inject.Inject;
//
//import com.google.gwt.event.dom.client.ClickEvent;
//import com.google.gwt.event.dom.client.ClickHandler;
//import com.google.gwt.uibinder.client.UiBinder;
//import com.google.gwt.uibinder.client.UiField;
//import com.google.gwt.uibinder.client.UiHandler;
//import com.google.gwt.user.client.Window;
//import com.google.gwt.user.client.ui.Button;
//import com.google.gwt.user.client.ui.Widget;
//import com.gwtplatform.mvp.client.ViewImpl;
//
//public class HomeView extends ViewImpl implements HomePresenter.MyView {
//    interface Binder extends UiBinder<Widget, HomeView> {
//    }
//
//    @UiField
//    Button startClickButton;
//
//    @Inject
//    HomeView(Binder uiBinder) {
//        initWidget(uiBinder.createAndBindUi(this));
//        startClickButton.addClickHandler(new ClickHandler() {
//            @Override
//            public void onClick(ClickEvent event) {
//                Window.alert("Privet");
//            }
//        });
//    }
//}
