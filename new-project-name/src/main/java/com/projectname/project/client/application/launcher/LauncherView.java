package com.projectname.project.client.application.launcher;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.SimplePanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;

import javax.inject.Inject;


public class LauncherView extends ViewWithUiHandlers<LauncherUiHandlers> implements LauncherPresenter.MyView {
    interface Binder extends UiBinder<Widget, LauncherView> {
    }

    @UiField
    TextBox launchCoordinates;
    @UiField
    TextBox launchPower;
    @UiField
    Button launchButton;

    @Inject
    LauncherView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
        launchButton.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent event) {
                Window.alert("toster");
            }
        });

//        bindSlot(LauncherPresenter.SLOT_LAUNCHER, launchCoordinates);
//        bindSlot(LauncherPresenter.SLOT_LAUNCHER, launchPower);
//        bindSlot(LauncherPresenter.SLOT_LAUNCHER, launchButton);
    }

    @UiHandler("launchButton")
    public void onLaunch(ClickEvent event) {
        getUiHandlers().onLaunch(launchCoordinates.getText(),launchPower.getText());
    }
}
