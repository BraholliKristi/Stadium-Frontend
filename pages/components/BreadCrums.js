import {Breadcrumb} from "react-bootstrap";

export default function BreadCrums({parent,child,lastchild}){
    return(
        <Breadcrumb className={"px-5 py-2 pt-4 Breadcrums"}>
            <Breadcrumb.Item href="#">{parent}</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                {child}
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{lastchild}</Breadcrumb.Item>
        </Breadcrumb>
    );
}
