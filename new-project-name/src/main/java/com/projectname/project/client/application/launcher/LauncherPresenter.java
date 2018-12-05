package com.projectname.project.client.application.launcher;

import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyStandard;
import com.gwtplatform.mvp.client.presenter.slots.NestedSlot;
import com.gwtplatform.mvp.client.proxy.Proxy;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.projectname.project.client.application.ApplicationPresenter;
import com.projectname.project.client.place.NameTokens;


public class LauncherPresenter extends Presenter<LauncherPresenter.MyView, LauncherPresenter.MyProxy> implements LauncherUiHandlers {

    private boolean validateFields(String coordinates, String power) {
        return coordinates.matches("[0-9]{3};[0-9]{3};[0-9]{3}") && power.matches("[0-9]");
    }

    @Override
    public void onLaunch(String launchCoordinates, String launchPower) {
        if (validateFields(launchCoordinates, launchPower)) {
        // TODO: Do something with the values. Process with service.
    }
    }

    interface MyView extends View, HasUiHandlers<LauncherUiHandlers> {
    }

    @ProxyStandard
    @NameToken(NameTokens.HOME)
    interface MyProxy extends ProxyPlace<LauncherPresenter> {

    }

    @Inject
    LauncherPresenter(
            EventBus eventBus,
            MyView view,
            MyProxy proxy) {
        super(eventBus, view, proxy, ApplicationPresenter.SLOT_MAIN/*,RevealType.Root*/);

        getView().setUiHandlers(this);
    }
}
